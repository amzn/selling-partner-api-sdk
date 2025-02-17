<?php
/**
 * DiscountFundingTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\replenishment\v2022_11_07\DiscountFunding;

/**
 * DiscountFundingTest Class Doc Comment
 *
 * @category    Class
 * @description The discount funding on the offer.
 * @package     SpApi
 */
class DiscountFundingTest extends TestCase
{

    private DiscountFunding $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DiscountFunding();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DiscountFunding"
     */
    public function testDiscountFunding()
    {
        $this->assertInstanceOf(DiscountFunding::class, $this->model);
    }

    /**
     * Test attribute "percentage"
     */
    public function testPropertyPercentage()
    {
        $testValue = [];
        
        $this->model->setPercentage($testValue);
        $this->assertEquals($testValue, $this->model->getPercentage());
    }
}

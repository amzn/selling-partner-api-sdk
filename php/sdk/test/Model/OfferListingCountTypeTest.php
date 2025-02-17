<?php
/**
 * OfferListingCountTypeTest
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
use SpApi\Model\pricing\v0\OfferListingCountType;

/**
 * OfferListingCountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The number of offer listings with the specified condition.
 * @package     SpApi
 */
class OfferListingCountTypeTest extends TestCase
{

    private OfferListingCountType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferListingCountType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferListingCountType"
     */
    public function testOfferListingCountType()
    {
        $this->assertInstanceOf(OfferListingCountType::class, $this->model);
    }

    /**
     * Test attribute "count"
     */
    public function testPropertyCount()
    {
        $testValue = 123;
        
        $this->model->setCount($testValue);
        $this->assertEquals($testValue, $this->model->getCount());
    }

    /**
     * Test attribute "condition"
     */
    public function testPropertyCondition()
    {
        $testValue = 'test';
        
        $this->model->setCondition($testValue);
        $this->assertEquals($testValue, $this->model->getCondition());
    }
}

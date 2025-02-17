<?php
/**
 * ReferencePriceTest
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
use SpApi\Model\pricing\v2022_05_01\ReferencePrice;

/**
 * ReferencePriceTest Class Doc Comment
 *
 * @category    Class
 * @description The reference price for the specified ASIN &#x60;marketplaceId&#x60; combination.
 * @package     SpApi
 */
class ReferencePriceTest extends TestCase
{

    private ReferencePrice $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReferencePrice();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReferencePrice"
     */
    public function testReferencePrice()
    {
        $this->assertInstanceOf(ReferencePrice::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "price"
     */
    public function testPropertyPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\MoneyType();
        
        $this->model->setPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPrice());
    }
}

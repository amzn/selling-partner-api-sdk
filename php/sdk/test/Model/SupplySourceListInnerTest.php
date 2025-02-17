<?php
/**
 * SupplySourceListInnerTest
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
use SpApi\Model\supplySources\v2020_07_01\SupplySourceListInner;

/**
 * SupplySourceListInnerTest Class Doc Comment
 *
 * @category    Class
 * @description SupplySourceListInner
 * @package     SpApi
 */
class SupplySourceListInnerTest extends TestCase
{

    private SupplySourceListInner $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupplySourceListInner();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupplySourceListInner"
     */
    public function testSupplySourceListInner()
    {
        $this->assertInstanceOf(SupplySourceListInner::class, $this->model);
    }

    /**
     * Test attribute "alias"
     */
    public function testPropertyAlias()
    {
        $testValue = 'test';
        
        $this->model->setAlias($testValue);
        $this->assertEquals($testValue, $this->model->getAlias());
    }

    /**
     * Test attribute "supply_source_id"
     */
    public function testPropertySupplySourceId()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceId($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceId());
    }

    /**
     * Test attribute "supply_source_code"
     */
    public function testPropertySupplySourceCode()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceCode($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceCode());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }
}

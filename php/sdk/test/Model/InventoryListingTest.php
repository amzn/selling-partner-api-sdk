<?php
/**
 * InventoryListingTest
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
use SpApi\Model\awd\v2024_05_09\InventoryListing;

/**
 * InventoryListingTest Class Doc Comment
 *
 * @category    Class
 * @description AWD inventory payload.
 * @package     SpApi
 */
class InventoryListingTest extends TestCase
{

    private InventoryListing $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryListing();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryListing"
     */
    public function testInventoryListing()
    {
        $this->assertInstanceOf(InventoryListing::class, $this->model);
    }

    /**
     * Test attribute "inventory"
     */
    public function testPropertyInventory()
    {
        $testValue = [];
        
        $this->model->setInventory($testValue);
        $this->assertEquals($testValue, $this->model->getInventory());
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }
}

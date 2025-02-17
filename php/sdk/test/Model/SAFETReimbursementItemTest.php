<?php
/**
 * SAFETReimbursementItemTest
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
use SpApi\Model\finances\v0\SAFETReimbursementItem;

/**
 * SAFETReimbursementItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item from a SAFE-T claim reimbursement.
 * @package     SpApi
 */
class SAFETReimbursementItemTest extends TestCase
{

    private SAFETReimbursementItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SAFETReimbursementItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SAFETReimbursementItem"
     */
    public function testSAFETReimbursementItem()
    {
        $this->assertInstanceOf(SAFETReimbursementItem::class, $this->model);
    }

    /**
     * Test attribute "item_charge_list"
     */
    public function testPropertyItemChargeList()
    {
        $testValue = [];
        
        $this->model->setItemChargeList($testValue);
        $this->assertEquals($testValue, $this->model->getItemChargeList());
    }

    /**
     * Test attribute "product_description"
     */
    public function testPropertyProductDescription()
    {
        $testValue = 'test';
        
        $this->model->setProductDescription($testValue);
        $this->assertEquals($testValue, $this->model->getProductDescription());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 'test';
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }
}

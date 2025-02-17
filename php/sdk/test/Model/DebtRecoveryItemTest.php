<?php
/**
 * DebtRecoveryItemTest
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
use SpApi\Model\finances\v0\DebtRecoveryItem;

/**
 * DebtRecoveryItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item of a debt payment or debt adjustment.
 * @package     SpApi
 */
class DebtRecoveryItemTest extends TestCase
{

    private DebtRecoveryItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DebtRecoveryItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DebtRecoveryItem"
     */
    public function testDebtRecoveryItem()
    {
        $this->assertInstanceOf(DebtRecoveryItem::class, $this->model);
    }

    /**
     * Test attribute "recovery_amount"
     */
    public function testPropertyRecoveryAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setRecoveryAmount($testValue);
        $this->assertEquals($testValue, $this->model->getRecoveryAmount());
    }

    /**
     * Test attribute "original_amount"
     */
    public function testPropertyOriginalAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setOriginalAmount($testValue);
        $this->assertEquals($testValue, $this->model->getOriginalAmount());
    }

    /**
     * Test attribute "group_begin_date"
     */
    public function testPropertyGroupBeginDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setGroupBeginDate($testValue);
        $this->assertEquals($testValue, $this->model->getGroupBeginDate());
    }

    /**
     * Test attribute "group_end_date"
     */
    public function testPropertyGroupEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setGroupEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getGroupEndDate());
    }
}

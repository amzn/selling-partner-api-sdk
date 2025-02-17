<?php
/**
 * FinancialEventGroupTest
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
use SpApi\Model\finances\v0\FinancialEventGroup;

/**
 * FinancialEventGroupTest Class Doc Comment
 *
 * @category    Class
 * @description Information related to a financial event group.
 * @package     SpApi
 */
class FinancialEventGroupTest extends TestCase
{

    private FinancialEventGroup $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FinancialEventGroup();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FinancialEventGroup"
     */
    public function testFinancialEventGroup()
    {
        $this->assertInstanceOf(FinancialEventGroup::class, $this->model);
    }

    /**
     * Test attribute "financial_event_group_id"
     */
    public function testPropertyFinancialEventGroupId()
    {
        $testValue = 'test';
        
        $this->model->setFinancialEventGroupId($testValue);
        $this->assertEquals($testValue, $this->model->getFinancialEventGroupId());
    }

    /**
     * Test attribute "processing_status"
     */
    public function testPropertyProcessingStatus()
    {
        $testValue = 'test';
        
        $this->model->setProcessingStatus($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStatus());
    }

    /**
     * Test attribute "fund_transfer_status"
     */
    public function testPropertyFundTransferStatus()
    {
        $testValue = 'test';
        
        $this->model->setFundTransferStatus($testValue);
        $this->assertEquals($testValue, $this->model->getFundTransferStatus());
    }

    /**
     * Test attribute "original_total"
     */
    public function testPropertyOriginalTotal()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setOriginalTotal($testValue);
        $this->assertEquals($testValue, $this->model->getOriginalTotal());
    }

    /**
     * Test attribute "converted_total"
     */
    public function testPropertyConvertedTotal()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setConvertedTotal($testValue);
        $this->assertEquals($testValue, $this->model->getConvertedTotal());
    }

    /**
     * Test attribute "fund_transfer_date"
     */
    public function testPropertyFundTransferDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setFundTransferDate($testValue);
        $this->assertEquals($testValue, $this->model->getFundTransferDate());
    }

    /**
     * Test attribute "trace_id"
     */
    public function testPropertyTraceId()
    {
        $testValue = 'test';
        
        $this->model->setTraceId($testValue);
        $this->assertEquals($testValue, $this->model->getTraceId());
    }

    /**
     * Test attribute "account_tail"
     */
    public function testPropertyAccountTail()
    {
        $testValue = 'test';
        
        $this->model->setAccountTail($testValue);
        $this->assertEquals($testValue, $this->model->getAccountTail());
    }

    /**
     * Test attribute "beginning_balance"
     */
    public function testPropertyBeginningBalance()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setBeginningBalance($testValue);
        $this->assertEquals($testValue, $this->model->getBeginningBalance());
    }

    /**
     * Test attribute "financial_event_group_start"
     */
    public function testPropertyFinancialEventGroupStart()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setFinancialEventGroupStart($testValue);
        $this->assertEquals($testValue, $this->model->getFinancialEventGroupStart());
    }

    /**
     * Test attribute "financial_event_group_end"
     */
    public function testPropertyFinancialEventGroupEnd()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setFinancialEventGroupEnd($testValue);
        $this->assertEquals($testValue, $this->model->getFinancialEventGroupEnd());
    }
}

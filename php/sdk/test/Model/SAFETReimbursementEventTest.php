<?php
/**
 * SAFETReimbursementEventTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\financesV0\SAFETReimbursementEvent;

/**
 * SAFETReimbursementEventTest Class Doc Comment
 *
 * @category    Class
 * @description A SAFE-T claim reimbursement on the seller&#39;s account.
 * @package     OpenAPI\Client
 */
class SAFETReimbursementEventTest extends TestCase
{

    private SAFETReimbursementEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SAFETReimbursementEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SAFETReimbursementEvent"
     */
    public function testSAFETReimbursementEvent()
    {
        $this->assertInstanceOf(SAFETReimbursementEvent::class, $this->model);
    }

    /**
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }

    /**
     * Test attribute "safet_claim_id"
     */
    public function testPropertySafetClaimId()
    {
        $testValue = 'test';
        
        $this->model->setSafetClaimId($testValue);
        $this->assertEquals($testValue, $this->model->getSafetClaimId());
    }

    /**
     * Test attribute "reimbursed_amount"
     */
    public function testPropertyReimbursedAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesV0\Currency();
        
        $this->model->setReimbursedAmount($testValue);
        $this->assertEquals($testValue, $this->model->getReimbursedAmount());
    }

    /**
     * Test attribute "reason_code"
     */
    public function testPropertyReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCode());
    }

    /**
     * Test attribute "safet_reimbursement_item_list"
     */
    public function testPropertySafetReimbursementItemList()
    {
        $testValue = [];
        
        $this->model->setSafetReimbursementItemList($testValue);
        $this->assertEquals($testValue, $this->model->getSafetReimbursementItemList());
    }
}

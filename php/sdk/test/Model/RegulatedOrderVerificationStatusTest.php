<?php
/**
 * RegulatedOrderVerificationStatusTest
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
use OpenAPI\Client\Model\orders\RegulatedOrderVerificationStatus;

/**
 * RegulatedOrderVerificationStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The verification status of the order, along with associated approval or rejection metadata.
 * @package     OpenAPI\Client
 */
class RegulatedOrderVerificationStatusTest extends TestCase
{

    private RegulatedOrderVerificationStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RegulatedOrderVerificationStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RegulatedOrderVerificationStatus"
     */
    public function testRegulatedOrderVerificationStatus()
    {
        $this->assertInstanceOf(RegulatedOrderVerificationStatus::class, $this->model);
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\VerificationStatus();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "requires_merchant_action"
     */
    public function testPropertyRequiresMerchantAction()
    {
        $testValue = true;
        
        $this->model->setRequiresMerchantAction($testValue);
        $this->assertEquals($testValue, $this->model->getRequiresMerchantAction());
    }

    /**
     * Test attribute "valid_rejection_reasons"
     */
    public function testPropertyValidRejectionReasons()
    {
        $testValue = [];
        
        $this->model->setValidRejectionReasons($testValue);
        $this->assertEquals($testValue, $this->model->getValidRejectionReasons());
    }

    /**
     * Test attribute "rejection_reason"
     */
    public function testPropertyRejectionReason()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\RejectionReason();
        
        $this->model->setRejectionReason($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReason());
    }

    /**
     * Test attribute "review_date"
     */
    public function testPropertyReviewDate()
    {
        $testValue = 'test';
        
        $this->model->setReviewDate($testValue);
        $this->assertEquals($testValue, $this->model->getReviewDate());
    }

    /**
     * Test attribute "external_reviewer_id"
     */
    public function testPropertyExternalReviewerId()
    {
        $testValue = 'test';
        
        $this->model->setExternalReviewerId($testValue);
        $this->assertEquals($testValue, $this->model->getExternalReviewerId());
    }

    /**
     * Test attribute "valid_verification_details"
     */
    public function testPropertyValidVerificationDetails()
    {
        $testValue = [];
        
        $this->model->setValidVerificationDetails($testValue);
        $this->assertEquals($testValue, $this->model->getValidVerificationDetails());
    }
}

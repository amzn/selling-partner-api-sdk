<?php
/**
 * CreateClaimRequestTest
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
use SpApi\Model\shipping\v2\CreateClaimRequest;

/**
 * CreateClaimRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the CreateClaim operation
 * @package     SpApi
 */
class CreateClaimRequestTest extends TestCase
{

    private CreateClaimRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateClaimRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateClaimRequest"
     */
    public function testCreateClaimRequest()
    {
        $this->assertInstanceOf(CreateClaimRequest::class, $this->model);
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }

    /**
     * Test attribute "declared_value"
     */
    public function testPropertyDeclaredValue()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Currency();
        
        $this->model->setDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getDeclaredValue());
    }

    /**
     * Test attribute "claim_reason"
     */
    public function testPropertyClaimReason()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\ClaimReason();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setClaimReason($testValue);
        $this->assertEquals($testValue, $this->model->getClaimReason());
    }

    /**
     * Test attribute "is_replacement_package_sent"
     */
    public function testPropertyIsReplacementPackageSent()
    {
        $testValue = true;
        
        $this->model->setIsReplacementPackageSent($testValue);
        $this->assertEquals($testValue, $this->model->getIsReplacementPackageSent());
    }

    /**
     * Test attribute "proofs"
     */
    public function testPropertyProofs()
    {
        $testValue = [];
        
        $this->model->setProofs($testValue);
        $this->assertEquals($testValue, $this->model->getProofs());
    }

    /**
     * Test attribute "settlement_type"
     */
    public function testPropertySettlementType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\SettlementType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setSettlementType($testValue);
        $this->assertEquals($testValue, $this->model->getSettlementType());
    }
}

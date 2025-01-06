<?php
/**
 * ItemEligibilityPreviewTest
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
use OpenAPI\Client\Model\fbaInbound\ItemEligibilityPreview;

/**
 * ItemEligibilityPreviewTest Class Doc Comment
 *
 * @category    Class
 * @description The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.
 * @package     OpenAPI\Client
 */
class ItemEligibilityPreviewTest extends TestCase
{

    private ItemEligibilityPreview $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemEligibilityPreview();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemEligibilityPreview"
     */
    public function testItemEligibilityPreview()
    {
        $this->assertInstanceOf(ItemEligibilityPreview::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "program"
     */
    public function testPropertyProgram()
    {
        $enumInstance = new ItemEligibilityPreview();
        $allowedValues = $enumInstance->getProgramAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setProgram($testValue);
        $this->assertEquals($testValue, $this->model->getProgram());
    }

    /**
     * Test attribute "is_eligible_for_program"
     */
    public function testPropertyIsEligibleForProgram()
    {
        $testValue = true;
        
        $this->model->setIsEligibleForProgram($testValue);
        $this->assertEquals($testValue, $this->model->getIsEligibleForProgram());
    }

    /**
     * Test attribute "ineligibility_reason_list"
     */
    public function testPropertyIneligibilityReasonList()
    {
        $enumInstance = new ItemEligibilityPreview();
        $allowedValues = $enumInstance->getIneligibilityReasonListAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setIneligibilityReasonList($testValue);
        $this->assertEquals($testValue, $this->model->getIneligibilityReasonList());
    }
}

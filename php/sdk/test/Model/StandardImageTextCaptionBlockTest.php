<?php
/**
 * StandardImageTextCaptionBlockTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\aplusContent\StandardImageTextCaptionBlock;

/**
 * StandardImageTextCaptionBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard image and text block, with a related caption. The caption may not display on all devices.
 * @package     OpenAPI\Client
 */
class StandardImageTextCaptionBlockTest extends TestCase
{

    private StandardImageTextCaptionBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardImageTextCaptionBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardImageTextCaptionBlock"
     */
    public function testStandardImageTextCaptionBlock()
    {
        $this->assertInstanceOf(StandardImageTextCaptionBlock::class, $this->model);
    }

    /**
     * Test attribute "block"
     */
    public function testPropertyBlock()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock();
        
        $this->model->setBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBlock());
    }

    /**
     * Test attribute "caption"
     */
    public function testPropertyCaption()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setCaption($testValue);
        $this->assertEquals($testValue, $this->model->getCaption());
    }
}

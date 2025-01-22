<?php
/**
 * StandardHeaderTextListBlockTest
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
use OpenAPI\Client\Model\aplusContent\StandardHeaderTextListBlock;

/**
 * StandardHeaderTextListBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ standard fixed-length list of text, with a related headline.
 * @package     OpenAPI\Client
 */
class StandardHeaderTextListBlockTest extends TestCase
{

    private StandardHeaderTextListBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardHeaderTextListBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardHeaderTextListBlock"
     */
    public function testStandardHeaderTextListBlock()
    {
        $this->assertInstanceOf(StandardHeaderTextListBlock::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "block"
     */
    public function testPropertyBlock()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardTextListBlock();
        
        $this->model->setBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBlock());
    }
}
